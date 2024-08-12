import React from "react";

const cards = [
  {
    id: 1,
    description: "Education",
    imgSrc: "/images/Education.png",
  },
  {
    id: 2,
    description: "Music",
    imgSrc: "/images/music.png",
  },
  {
    id: 3,
    description: "Dance",
    imgSrc: "/images/dance.png",
  },
  {
    id: 4,
    description: "Gymnastic",
    imgSrc: "/images/gymnastic.png",
  },
  {
    id: 5,
    description: "Music",
    imgSrc: "/images/music.png",
  },
  {
    id: 6,
    description: "Science",
    imgSrc: "/images/science.png",
  },
  {
    id: 7,
    description: "Music",
    imgSrc: "/images/music.png",
  },
  {
    id: 8,
    description: "Swimming",
    imgSrc: "/images/swimming.png",
  },
  {
    id: 9,
    description: "Martial Arts",
    imgSrc: "/images/martial_arts.png",
  },
  {
    id: 10,
    description: "Sports",
    imgSrc: "/images/sports.png",
  },

];

const GameCards = () => {
  return (
    
    <section className="bg-gray-100 m-10">
        <h4 className='my-4 font-bold text-lg'>Our Categories</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {cards.map((card) => (
            <div
                key={card.id}
                className="bg-white border border-white hover:shadow-xl rounded-lg p-4"
            >
                <img
                src={card.imgSrc}
                alt={card.description}
                className="w-full h-6/7 object-cover rounded-t-sm"
                />
                <div className="p-2 text-center">
                <p className="text-gray-700 text-sm font-bold">{card.description}</p>
                </div>
            </div>
            ))}
        </div>
    </section>
  );
};

export default GameCards;
