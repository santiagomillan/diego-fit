// "use client";
// import React, { useRef, useState } from 'react';
// import emailjs from '@emailjs/browser';
// const ContactForm = () => {
//     const form = useRef();
//     const [formData, setFormData] = useState({
//       user_name: '',
//       user_email: '',
//       user_phone: '',
//       message: ''
//     });
//     const [error, setError] = useState(null);
//     const [success, setSuccess] = useState(false);
  
//     const handleChange = (e) => {
//       setFormData({
//         ...formData,
//         [e.target.name]: e.target.value
//       });
//     };

//     const sanitizeInput = (input) => {
//         const temp = document.createElement('div');
//         temp.textContent = input;
//         return temp.innerHTML;
//       };    
  
//     const sendEmail = (e) => {
//       e.preventDefault();
  
//       // Basic validation
//       if (!formData.user_name || !formData.user_email || !formData.user_phone || !formData.message) {
//         setError('Por favor, completa todos los campos');
//         return;
//       }
  
//     // Sanitization
//     const sanitizedData = {
//         user_name: sanitizeInput(formData.user_name),
//         user_email: sanitizeInput(formData.user_email),
//         user_phone: sanitizeInput(formData.user_phone),
//         message: sanitizeInput(formData.message)
//       };
//     //   emailjs.send("service_fkab77n","template_8lcoefe");
//     //   emailjs.sendForm(
//     //     process.env.YOUR_SERVICE_ID,
//     //     process.env.YOUR_TEMPLATE_ID,
//     //     form.current,
//     //     process.env.OUR_PUBLIC_KEY
//     //   )
//     emailjs.sendForm(
//         "service_fkab77n",
//         "template_8lcoefe",
//         form.current,
//         "VBd2iaBvow-b8omJm"
//       )
//       .then((response) => {
//         console.log('SUCCESS!', response.status, response.text);
//         setSuccess(true);
//         setError(null);
//         // Clear form
//         setFormData({
//           user_name: '',
//           user_email: '',
//           user_phone: '',
//           message: ''
//         });
//       })
//       .catch((err) => {
//         console.error('FAILED...', err);
//         setError('No se pudo enviar el mensaje. Por favor, inténtalo de nuevo más tarde.');
//       });
//     };
  
//     return (
//       <div className="max-w-md mx-auto md:my-4 p-4 w-full rounded-md shadow-md bg-slate-800">
//         <h3 className="text-3xl font-semibold text-center mb-4">Contáctame</h3>
//         {error && <p className="text-red-500">{error}</p>}
//         {success && <p className="text-green-500">¡Mensaje enviado exitosamente!</p>}
//         <form ref={form} onSubmit={sendEmail}>
//           <div className="mb-4">
//             <label className="block text-sm font-medium mb-2" htmlFor="user_name">Nombre</label>
//             <input className="w-full p-2 bg-slate-900 rounded-md" type="text" name="user_name" required placeholder="Tu nombre" value={formData.user_name} onChange={handleChange} />
//           </div>
//           <div className="mb-4">
//             <label className="block text-sm font-medium mb-2" htmlFor="user_email">Email</label>
//             <input className="w-full p-2 bg-slate-900 rounded-md" type="email" name="user_email" required placeholder="Tu email" value={formData.user_email} onChange={handleChange} />
//           </div>
//           <div className="mb-4">
//             <label className="block text-sm font-medium mb-2" htmlFor="user_phone">Teléfono</label>
//             <input className="w-full p-2 bg-slate-900 rounded-md" type="tel" name="user_phone" required placeholder="Tu teléfono" value={formData.user_phone} onChange={handleChange} />
//             <small className="text-gray-400">Si el número es de fuera de Colombia, por favor incluye el indicativo del país.</small>
//           </div>
//           <div className="mb-4">
//             <label className="block text-sm font-medium mb-2" htmlFor="message">Mensaje</label>
//             <textarea className="w-full p-2 bg-slate-900 rounded-md" name="message" rows="4" required placeholder="Tu mensaje" value={formData.message} onChange={handleChange}></textarea>
//           </div>
//           <button className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700">Enviar</button>
//         </form>
//       </div>
//     );
//   };
  
//   export default ContactForm;

"use client";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const serviceId = process.env.NEXT_PUBLIC_YOUR_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID;
    const userId = process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY;

    console.log(serviceId, templateId, userId);

    const form = useRef();
    const [formData, setFormData] = useState({
      user_name: '',
      user_email: '',
      user_phone: '',
      message: ''
    });
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };

    const sanitizeInput = (input) => {
        const temp = document.createElement('div');
        temp.textContent = input;
        return temp.innerHTML;
    };    
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      // Basic validation
      if (!formData.user_name || !formData.user_email || !formData.user_phone || !formData.message) {
        setError('Por favor, completa todos los campos');
        return;
      }
  
      // Sanitization
      const sanitizedData = {
        user_name: sanitizeInput(formData.user_name),
        user_email: sanitizeInput(formData.user_email),
        user_phone: sanitizeInput(formData.user_phone),
        message: sanitizeInput(formData.message)
      };
  
      // Using emailjs.sendForm with sanitized data
      emailjs.sendForm(
        serviceId,
        templateId,
        form.current,
        userId
      )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSuccess(true);
        setError(null);
        // Clear form
        setFormData({
          user_name: '',
          user_email: '',
          user_phone: '',
          message: ''
        });
      })
      .catch((err) => {
        console.error('FAILED...', err);
        setError('No se pudo enviar el mensaje. Por favor, inténtalo de nuevo más tarde.');
      });
    };
  
    return (
      <div className="max-w-md mx-auto md:my-4 p-4 w-full rounded-md shadow-md bg-slate-800">
        <h3 className="text-3xl font-semibold text-center mb-4">Contáctame</h3>
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">¡Mensaje enviado exitosamente!</p>}
        <form ref={form} onSubmit={sendEmail}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="user_name">Nombre</label>
            <input className="w-full p-2 bg-slate-900 rounded-md" type="text" name="user_name" required placeholder="Tu nombre" value={formData.user_name} onChange={handleChange} />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="user_email">Email</label>
            <input className="w-full p-2 bg-slate-900 rounded-md" type="email" name="user_email" required placeholder="Tu email" value={formData.user_email} onChange={handleChange} />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="user_phone">Teléfono</label>
            <input className="w-full p-2 bg-slate-900 rounded-md" type="tel" name="user_phone" required placeholder="Tu teléfono" value={formData.user_phone} onChange={handleChange} />
            <small className="text-gray-400">Si el número es de fuera de Colombia, por favor incluye el indicativo del país.</small>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="message">Mensaje</label>
            <textarea className="w-full p-2 bg-slate-900 rounded-md" name="message" rows="4" required placeholder="Tu mensaje" value={formData.message} onChange={handleChange}></textarea>
          </div>
          <button className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700">Enviar</button>
        </form>
      </div>
    );
  };
  
  export default ContactForm;