// "use client";

// import React, { useState } from 'react';

// const FAQ = () => {
//     const [openFAQ, setOpenFAQ] = useState(null);

//     const toggleFAQ = (index) => {
//         setOpenFAQ(openFAQ === index ? null : index);
//     };

//     return (
//         <div className="py-24 px-8 max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
//             <div className="flex flex-col text-left basis-1/2">
//                 <p className="sm:text-4xl text-3xl font-extrabold text-base-content text-sky-500">Preguntas frecuentes</p>
//             </div>
//             <ul className="basis-1/2">
//                 {faqData.map((faq, index) => (
//                     <li key={index}>
//                         <button
//                             className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
//                             aria-expanded={openFAQ === index}
//                             onClick={() => toggleFAQ(index)}
//                         >
//                             <span className="flex-1 text-base-content text-white">{faq.question}</span>
//                             <svg className="flex-shrink-0 w-4 h-4 ml-auto fill-current" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
//                                 <rect y="7" width="16" height="2" rx="1" className={`transform origin-center transition duration-200 ease-out ${openFAQ === index ? 'rotate-90' : ''}`}></rect>
//                                 <rect y="7" width="16" height="2" rx="1" className="transform origin-center rotate-90 transition duration-200 ease-out"></rect>
//                             </svg>
//                         </button>
//                         <div
//                             className="transition-all duration-300 ease-in-out overflow-hidden"
//                             style={{
//                                 maxHeight: openFAQ === index ? '200px' : '0',
//                                 transition: 'max-height 0.3s ease-in-out'
//                             }}
//                         >
//                             <div className="pb-5 leading-relaxed">
//                                 <div className="space-y-2 leading-relaxed">{faq.answer}</div>
//                             </div>
//                         </div>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// const faqData = [
//     {
//         question: "¿Qué necesito para empezar el entrenamiento?",
//         answer: "Para comenzar el entrenamiento, necesitarás una consulta inicial para evaluar tu estado físico y definir tus objetivos. Además, es recomendable tener ropa deportiva cómoda, calzado adecuado y una botella de agua para mantenerte hidratado durante las sesiones."
//     },
//     {
//         question: "¿Cuánto tiempo tomará ver resultados?",
//         answer: "El tiempo para ver resultados puede variar según tu nivel de condición física actual, tus objetivos y la consistencia de tu entrenamiento y dieta. Generalmente, puedes empezar a notar cambios en tu energía y estado físico en unas pocas semanas, con mejoras más significativas en unos pocos meses de entrenamiento regular."
//     },
//     {
//         question: "¿Los entrenamientos son adecuados para todos los niveles?",
//         answer: "Sí, los entrenamientos están diseñados para adaptarse a todos los niveles de condición física, desde principiantes hasta avanzados. Cada programa es personalizado para satisfacer tus necesidades y habilidades específicas, asegurando que progreses de manera segura y efectiva."
//     },
// ];

// export default FAQ;

"use client";

import React, { useState } from 'react';

const FAQ = () => {
    const [openFAQ, setOpenFAQ] = useState(null);

    const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    return (
        <div className="py-24 px-8 max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
            <div className="flex flex-col text-left basis-1/2">
                <p className="sm:text-4xl text-3xl font-extrabold text-base-content text-sky-500">Preguntas frecuentes</p>
            </div>
            <ul className="basis-1/2">
                {faqData.map((faq, index) => (
                    <li key={index}>
                        <button
                            className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
                            aria-expanded={openFAQ === index}
                            onClick={() => toggleFAQ(index)}
                        >
                            <span className="flex-1 text-base-content text-white">{faq.question}</span>
                            <svg className="flex-shrink-0 w-4 h-4 ml-auto fill-current" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                <rect y="7" width="16" height="2" rx="1" className={`transform origin-center transition duration-200 ease-out ${openFAQ === index ? 'rotate-0' : ''}`}></rect>
                                <rect y="7" width="16" height="2" rx="1" className={`transform origin-center transition duration-200 ease-out rotate-90 ${openFAQ === index ? '-rotate-0' : ''}`}></rect>
                            </svg>
                        </button>
                        <div
                            className="transition-all duration-300 ease-in-out overflow-hidden"
                            style={{
                                maxHeight: openFAQ === index ? '200px' : '0',
                                transition: 'max-height 0.3s ease-in-out'
                            }}
                        >
                            <div className="pb-5 leading-relaxed">
                                <div className="space-y-2 leading-relaxed">{faq.answer}</div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const faqData = [
    {
        question: "¿Qué necesito para empezar el entrenamiento?",
        answer: "Para comenzar el entrenamiento, necesitarás una consulta inicial para evaluar tu estado físico y definir tus objetivos. Además, es recomendable tener ropa deportiva cómoda, calzado adecuado y una botella de agua para mantenerte hidratado durante las sesiones."
    },
    {
        question: "¿Cuánto tiempo tomará ver resultados?",
        answer: "El tiempo para ver resultados puede variar según tu nivel de condición física actual, tus objetivos y la consistencia de tu entrenamiento y dieta. Generalmente, puedes empezar a notar cambios en tu energía y estado físico en unas pocas semanas, con mejoras más significativas en unos pocos meses de entrenamiento regular."
    },
    {
        question: "¿Los entrenamientos son adecuados para todos los niveles?",
        answer: "Sí, los entrenamientos están diseñados para adaptarse a todos los niveles de condición física, desde principiantes hasta avanzados. Cada programa es personalizado para satisfacer tus necesidades y habilidades específicas, asegurando que progreses de manera segura y efectiva."
    },
];

export default FAQ;
