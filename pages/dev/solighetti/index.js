import React from 'react';
import Features from 'dev/solighetti/Features';

const features = [
  {
    id: 1,
    image: "https://i.ibb.co/JjgJ35G/comment.png",
    title: "Chi siamo",
    description: "Una breve descrizione di chi siamo."
  },
  {
    id: 2,
    image: "https://i.ibb.co/LNkL1hY/shield.png",
    title: "Cosa facciamo",
    description: "Una breve descrizione di cosa facciamo"
  },
  {
    id: 3,
    image: "https://i.ibb.co/f4sGXQp/fingerprint.png",
    title: "Contattaci",
    description: "I nostri contatti"
  }
]

function HomePage() {
  return (
    <div>
      <Features
        title="I nostri punti di forza"
        description="This is the paragraph......."
        features={features}
        cardWidth={4}
      />
    </div>
  );
}

export default HomePage;
