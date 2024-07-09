// // import React from 'react';

// // const ContactForm = () => {
// //   return (
// //     <div className="max-w-md mx-auto md:my-4 p-4 w-full rounded-md shadow-md bg-slate-800">
// //       <h3 className="text-3xl font-semibold text-center mb-4">Contáctame</h3>
// //       <form>
// //         <div className="mb-4">
// //           <label className="block text-sm  font-medium mb-2" htmlFor="name">Nombre</label>
// //           <input className="w-full p-2 bg-slate-900 rounded-md" type="text" id="name" required placeholder="Tu nombre" />
// //         </div>
// //         <div className="mb-4">
// //           <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
// //           <input className="w-full p-2 bg-slate-900 rounded-md" type="email" id="email" required placeholder="Tu email" />
// //         </div>
// //         <div className="mb-4">
// //           <label className="block text-sm font-medium mb-2" htmlFor="phone">Teléfono</label>
// //           <input className="w-full p-2 bg-slate-900 rounded-md" type="number" id="phone" required placeholder="Tu teléfono" />
// //         </div>
// //         <div className="mb-4">
// //           <label className="block text-sm font-medium mb-2" htmlFor="message">Mensaje</label>
// //           <textarea className="w-full p-2 bg-slate-900 rounded-md" id="message" rows="4" required placeholder="Tu mensaje"></textarea>
// //         </div>
// //         <button className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700">Enviar</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default ContactForm;
// "use client"
// import React, { useState } from 'react';
// import emailjs from 'emailjs-com';

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [id]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const templateParams = {
//       name: formData.name,
//       email: formData.email,
//       phone: formData.phone,
//       message: formData.message
//     };

//     emailjs.send(process.ENV. , 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_USER_ID')
//       .then((response) => {
//         console.log('SUCCESS!', response.status, response.text);
//         alert('Mensaje enviado exitosamente!');
//       }, (err) => {
//         console.error('FAILED...', err);
//         alert('Hubo un error al enviar el mensaje, intenta de nuevo.');
//       });

//     setFormData({
//       name: '',
//       email: '',
//       phone: '',
//       message: ''
//     });
//   };

//   return (
//     <div className="max-w-md mx-auto md:my-4 p-4 w-full rounded-md shadow-md bg-slate-800">
//       <h3 className="text-3xl font-semibold text-center mb-4">Contáctame</h3>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label className="block text-sm font-medium mb-2" htmlFor="name">Nombre</label>
//           <input
//             className="w-full p-2 border border-gray-300 rounded-md"
//             type="text"
//             id="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Tu nombre"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
//           <input
//             className="w-full p-2 border border-gray-300 rounded-md"
//             type="email"
//             id="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Tu email"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-medium mb-2" htmlFor="phone">Teléfono</label>
//           <input
//             className="w-full p-2 border border-gray-300 rounded-md"
//             type="tel"
//             id="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             placeholder="Tu teléfono"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-medium mb-2" htmlFor="message">Mensaje</label>
//           <textarea
//             className="w-full p-2 border border-gray-300 rounded-md"
//             id="message"
//             rows="4"
//             value={formData.message}
//             onChange={handleChange}
//             placeholder="Tu mensaje"
//             required
//           ></textarea>
//         </div>
//         <button className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700" type="submit">Enviar</button>
//       </form>
//     </div>
//   );
// };

// export default ContactForm;

"use client";
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setError('Por favor, completa todos los campos');
      return;
    }

    // Sanitization (basic example, should be enhanced)
    const sanitizedData = {
      name: formData.name.replace(/<[^>]+>/g, ''),
      email: formData.email.replace(/<[^>]+>/g, ''),
      phone: formData.phone.replace(/<[^>]+>/g, ''),
      message: formData.message.replace(/<[^>]+>/g, '')
    };

    const templateParams = {
      from_name: sanitizedData.name,
      from_email: sanitizedData.email,
      from_phone: sanitizedData.phone,
      message: sanitizedData.message
    };

    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICEID,
      process.env.REACT_APP_EMAILJS_TEMPLATEID,
      templateParams,
      process.env.REACT_APP_EMAILJS_USERID
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setSuccess(true);
      setError(null);
      // Clear form
      setFormData({
        name: '',
        email: '',
        phone: '',
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
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="name">Nombre</label>
          <input className="w-full p-2 bg-slate-900 rounded-md" type="text" id="name" required placeholder="Tu nombre" value={formData.name} onChange={handleChange} />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
          <input className="w-full p-2 bg-slate-900 rounded-md" type="email" id="email" required placeholder="Tu email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="phone">Teléfono</label>
          <input className="w-full p-2 bg-slate-900 rounded-md" type="tel" id="phone" required placeholder="Tu teléfono" value={formData.phone} onChange={handleChange} />
          <small className="text-gray-400">Si el número es de fuera de Colombia, por favor incluye el indicativo del país.</small>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="message">Mensaje</label>
          <textarea className="w-full p-2 bg-slate-900 rounded-md" id="message" rows="4" required placeholder="Tu mensaje" value={formData.message} onChange={handleChange}></textarea>
        </div>
        <button className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700">Enviar</button>
      </form>
    </div>
  );
};

export default ContactForm;