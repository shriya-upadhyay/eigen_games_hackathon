import { useState } from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';



export default function LandingPage() {
    const items = Array.from({ length: 9 }, (_, i) => `Card ${i + 1}`);
    const cardsContent = [
        {
          title: "Elon Twitter Agent",
          description: "Predict Elon Musk's Next Tweet",
          image: "/path/to/image1.jpg",
          link: "https://autonome.alt.technology/elon-bvjgxq"
        },
        {
          title: "Libra Price Agent",
          description: "Predict price of Libra Token",
          image: "/path/to/image2.jpg",
          link: "https://example.com/2"
        },
        {
          title: "Fashion AI Agent",
          description: "Predicting celebrity outfits at the Met Gala",
          image: "/path/to/image3.jpg",
          link: "https://example.com/3"
        },
      ];


    return (
        <div className="bg-gray-900 text-gray-100 w-screen min-h-screen p-6 overflow-x-hidden">

        <h1 className="text-center"> Welcome to Sonder! </h1>

        <h2> Currently trending agents </h2>

        

        <div>
        <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cardsContent.map((card, index) => (
          <div key={index} className="bg-gray-800 rounded-lg border border-gray-700 p-6 shadow-lg hover:shadow-xl transition-shadow">
            {card.image && (
              <img 
                src={card.image} 
                alt={card.title} 
                className="w-full h-48 object-cover rounded-md mb-4"
              />
            )}
            <h3 className="text-xl font-semibold text-white mb-2">{card.title}</h3>
            <p className="text-gray-400 mb-4">{card.description}</p>
            {card.link && (
              <a 
                href={card.link} 
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                Learn more →
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
            </div>
        </div> 
        
    );
}