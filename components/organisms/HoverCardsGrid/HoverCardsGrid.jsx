// import { Title } from 'app/components/atoms/Title/Title';
// import React from 'react';

// export default function HoverCardsGrid() {
//     const cards = [
//         { title: 'Entrenamiento de Fuerza', description: 'Entrenamiento de Fuerza', image: 'https://images.pexels.com/photos/949131/pexels-photo-949131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
//         { title: 'Pérdida de Peso', description: 'Pérdida de Peso', image: 'https://images.pexels.com/photos/2247179/pexels-photo-2247179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
//         { title: 'Entrenamiento Funcional', description: 'Entrenamiento Funcional', image: 'https://images.pexels.com/photos/1552248/pexels-photo-1552248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
//         { title: 'Rehabilitación', description: 'Rehabilitación', image: 'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
//         { title: 'Entrenamiento de Resistencia', description: 'Entrenamiento de Resistencia', image: 'https://images.pexels.com/photos/2468339/pexels-photo-2468339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
//         { title: 'Entrenamiento Personalizado', description: 'Entrenamiento Personalizado', image: 'https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
//     ];

//     return (
//         <>
//         <Title title={"Entrenamientos Disponibles"} subtitle={"Explora nuestros diferentes programas de entrenamiento diseñados para cada objetivo."}/>
//         <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 p-5">
//             {cards.map((card, index) => (
//                 <div key={index} className="relative overflow-hidden rounded-lg shadow-lg">
//                     <img className="w-full h-64 object-cover" src={card.image} alt={card.title} />
//                     <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
//                         <h2 className="text-white text-xl font-semibold">{card.title}</h2>
//                         <p className="text-white text-sm mt-2">{card.description}</p>
//                     </div>
//                 </div>
//             ))}
//         </div>
//         </>
//     );
// }

import { Title } from 'app/components/atoms/Title/Title';
import React from 'react';

export default function HoverCardsGrid() {
    const cards = [
        { title: 'Entrenamiento de Fuerza', description: 'Entrenamiento de Fuerza', image: 'https://images.pexels.com/photos/949131/pexels-photo-949131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { title: 'Pérdida de Peso', description: 'Pérdida de Peso', image: 'https://images.pexels.com/photos/2247179/pexels-photo-2247179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { title: 'Entrenamiento Funcional', description: 'Entrenamiento Funcional', image: 'https://images.pexels.com/photos/1552248/pexels-photo-1552248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { title: 'Rehabilitación', description: 'Rehabilitación', image: 'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { title: 'Entrenamiento de Resistencia', description: 'Entrenamiento de Resistencia', image: 'https://images.pexels.com/photos/2468339/pexels-photo-2468339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { title: 'Entrenamiento Personalizado', description: 'Entrenamiento Personalizado', image: 'https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    ];

    return (
        <>
        <Title title={"Entrenamientos Disponibles"} subtitle={"Explora nuestros diferentes programas de entrenamiento diseñados para cada objetivo."}/>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 p-5">
            {cards.map((card, index) => (
                <div key={index} className="relative overflow-hidden rounded-lg shadow-lg aspect-square">
                    <img className="w-full h-full object-cover" src={card.image} alt={card.title} />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <h2 className="text-white text-xl font-semibold">{card.title}</h2>
                        <p className="text-white text-sm mt-2">{card.description}</p>
                    </div>
                </div>
            ))}
        </div>
        </>
    );
}