import { Title } from 'app/components/atoms/Title/Title';
import React from 'react';

export default function HoverCardsGrid() {
    const cards = [
        { title: 'Card 1', description: 'Description for Card 1', image: 'https://via.placeholder.com/300' },
        { title: 'Card 2', description: 'Description for Card 2', image: 'https://via.placeholder.com/300' },
        { title: 'Card 3', description: 'Description for Card 3', image: 'https://via.placeholder.com/300' },
        { title: 'Card 4', description: 'Description for Card 4', image: 'https://via.placeholder.com/300' },
        { title: 'Card 5', description: 'Description for Card 5', image: 'https://via.placeholder.com/300' },
        { title: 'Card 6', description: 'Description for Card 6', image: 'https://via.placeholder.com/300' },
    ];

    return (
        <>
        <Title title={"Entrenamientos Disponibles"} subtitle={"Explora nuestros diferentes programas de entrenamiento diseñados para cada objetivo."}/>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 p-5">
            {cards.map((card, index) => (
                <div key={index} className="relative overflow-hidden rounded-lg shadow-lg">
                    <img className="w-full h-64 object-cover" src={card.image} alt={card.title} />
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
