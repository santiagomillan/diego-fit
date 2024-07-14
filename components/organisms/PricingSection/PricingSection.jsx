// import { Title } from "app/components/atoms/Title/Title";

// export const PricingSection = () => {
//   const plans = [
//     {
//       name: "Free",
//       price: "$0",
//       description: "Get started with our basic features.",
//       features: ["1 user account", "10 transactions per month", "Basic support"],
//       linkText: "Sign Up",
//     },
//     {
//       name: "Starter",
//       price: "$49",
//       description: "Perfect for small businesses and startups.",
//       features: ["5 user accounts", "100 transactions per month", "Standard support"],
//       linkText: "Get Started",
//     },
//     {
//       name: "Pro",
//       price: "$99",
//       description: "Ideal for growing businesses and enterprises.",
//       features: ["Unlimited user accounts", "Unlimited transactions", "Priority support", "Advanced analytics"],
//       linkText: "Get Started",
//     },
//     {
//       name: "Enterprise",
//       price: "Custom",
//       description: "Tailored for large-scale deployments and custom needs.",
//       features: ["Dedicated infrastructure", "Custom integrations", "Dedicated support team", "Premium SLAs"],
//       linkText: "Contact Sales",
//     },
//   ];

//   return (
//     <section className="py-6" id="planes">
//       <Title
//         title={"Planes y Precios"}
//         subtitle={"Elige el plan que mejor se adapte a tus necesidades y objetivos."}
//       />
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3">
//         <div className={`grid grid-cols-1 gap-8 ${plans.length === 1 ? 'sm:grid-cols-1' : 'sm:grid-cols-2'} lg:grid-cols-${plans.length}`}>
//           {plans.map((plan, index) => (
//             <div key={index} className="bg-gray-900 rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
//               <div className="mb-8">
//                 <h3 className="text-2xl font-semibold text-sky-500">{plan.name}</h3>
//                 <p className="mt-4 text-gray-200">{plan.description}</p>
//               </div>
//               <div className="mb-8">
//                 <span className="text-5xl font-extrabold text-white">{plan.price}</span>
//                 {plan.price !== "Custom" && <span className="text-xl font-medium text-gray-400">/mo</span>}
//               </div>
//               <ul className="mb-8 space-y-4 text-gray-400">
//                 {plan.features.map((feature, featureIndex) => (
//                   <li key={featureIndex} className="flex items-center">
//                     <svg
//                       className="h-6 w-6 text-green-500 mr-2"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
//                     </svg>
//                     <span>{feature}</span>
//                   </li>
//                 ))}
//               </ul>
//               <a
//                 href="#"
//                 className="block w-full py-3 px-6 text-center rounded-md text-white font-medium bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
//               >
//                 {plan.linkText}
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

import { Title } from "app/components/atoms/Title/Title";

export const PricingSection = () => {
  const plans = [
    {
      name: "Clase de cortesia",
      price: "$0",
      description: "Inicia con una clase de cortesia.",
      features: ["1 clase precencial", "2 horas de clase", "Valoracion basica"],
      linkText: "Agenda ahora",
      url: "https://wa.link/vczg76"
    },
    {
      name: "virtual Starter",
      price: "$49",
      description: "Perfecto para dar tus primeros pasos para evolucionar tu cuerpo.",
      features: ["5 user accounts", "100 transactions per month", "Standard support"],
      linkText: "Inicia ahora",
      url: "https://wa.link/3gt6vq"
    },
    {
      name: "Virtual Pro",
      price: "$99",
      description: "Ideal para los gerreros y gurerreras que quieran un camboi total y esten comprometidos con los retos.",
      features: ["Unlimited user accounts", "Unlimited transactions", "Priority support", "Advanced analytics"],
      linkText: "Inicia ahora",
      url: "https://wa.link/3gt6vq"
    },
    {
      name: "Presencial",
      price: "Custom",
      description: "Asesoria personalizada con acompañamientos en la sede.",
      features: ["Dedicated infrastructure", "Custom integrations", "Dedicated support team", "Premium SLAs"],
      linkText: "Inicia ahora",
      url: "https://wa.link/zgz8ok"
    },
  ];

  return (
    <section className="py-6" id="planes">
      <Title
        title={"Planes y Precios"}
        subtitle={"Elige el plan que mejor se adapte a tus necesidades y objetivos."}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, index) => (
            <div key={index} className="bg-gray-900 rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-sky-500">{plan.name}</h3>
                <p className="mt-4 text-gray-200">{plan.description}</p>
              </div>
              <div className="mb-8">
                <span className="text-5xl font-extrabold text-white">{plan.price}</span>
                {plan.price !== "Custom" && <span className="text-xl font-medium text-gray-400">/mo</span>}
              </div>
              <ul className="mb-8 space-y-4 text-gray-400">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <svg
                      className="h-6 w-6 text-green-500 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href={plan.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 px-6 text-center rounded-md text-white font-medium bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
              >
                {plan.linkText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};