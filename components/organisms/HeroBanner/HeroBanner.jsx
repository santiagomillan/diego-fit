// export const HeroBanner = () => {
//     return (
//         <div className="relative isolate overflow-hidden">
//             <img src="https://images.pexels.com/photos/791763/pexels-photo-791763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
//             alt="hero banner" 
//             // className="-z-10 absolute inset-0 object-cover w-full h-full" 
//             className="absolute inset-0 -z-10 h-full w-full stroke-white/100 [mask-image:radial-gradient(100%_200%_at_top_right,white,transparent)]"
//             />
//         <div className="mt-[-50px] flex h-screen items-center justify-center">
//           <div className="max-w-full flex-shrink-0 px-4 text-center lg:mx-0 lg:max-w-3xl lg:pt-8">
//             <h1 className="mt-10 text-5xl font-bold tracking-tight text-white">
//                 Transforma tu 
//               <span className="text-sky-500"> vida</span> con el
//               <span className="text-sky-500"> Entrenamiento Personalizado</span>
//             </h1>
//             <p className="mt-6 text-lg leading-8 text-gray-300">Descubre cómo alcanzar tus metas con un plan de entrenamiento hecho a tu medida.</p>
//             <div className="mt-5 flex items-center justify-center gap-x-6">
//               <a href="/"
//                 className="rounded-md bg-sky-500 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
//                 rel="noreferrer">Comienza Hoy →</a>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };
  
export const HeroBanner = () => {
    return (
      <div className="relative isolate overflow-hidden h-screen">
        <img 
          src="https://images.pexels.com/photos/791763/pexels-photo-791763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="hero banner" 
          className="absolute inset-0 -z-10 w-full h-full object-cover object-center [mask-image:radial-gradient(100%_200%_at_top_right,white,transparent)]"
        />
        <div className="flex h-full items-center justify-center">
          <div className="max-w-full px-4 text-center lg:mx-0 lg:max-w-3xl lg:pt-8">
            <h1 className="mt-10 text-5xl font-bold tracking-tight text-white">
              Transforma tu 
              <span className="text-sky-500"> vida</span> con el
              <span className="text-sky-500"> Entrenamiento Personalizado</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Descubre cómo alcanzar tus metas con un plan de entrenamiento hecho a tu medida.
            </p>
            <div className="mt-5 flex items-center justify-center gap-x-6">
              <a 
                href="/"
                className="rounded-md bg-sky-500 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
                rel="noreferrer"
              >
                Comienza Hoy →
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };