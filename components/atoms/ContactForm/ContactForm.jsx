import React from 'react';

const ContactForm = () => {
  return (
    <div className="max-w-md mx-auto md:my-4 p-4 w-full border rounded-md shadow-md">
      <h3 className="text-3xl font-semibold text-center mb-4">Contáctame</h3>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="name">Nombre</label>
          <input className="w-full p-2 border border-gray-300 rounded-md" type="text" id="name" placeholder="Tu nombre" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
          <input className="w-full p-2 border border-gray-300 rounded-md" type="email" id="email" placeholder="Tu email" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="message">Mensaje</label>
          <textarea className="w-full p-2 border border-gray-300 rounded-md" id="message" rows="4" placeholder="Tu mensaje"></textarea>
        </div>
        <button className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700">Enviar</button>
      </form>
    </div>
  );
};

export default ContactForm;