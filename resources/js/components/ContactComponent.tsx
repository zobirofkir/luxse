import React from 'react';

const ContactComponent = () => {
  return (
    <section className="bg-black text-white py-16 px-6 text-center rounded-xl max-w-4xl mx-auto shadow-lg">
      <h2 className="text-4xl font-extrabold mb-4 tracking-wide">
        Rejoignez Notre Communauté Aujourd’hui
      </h2>
      <p className="text-lg mb-8 max-w-xl mx-auto">
        Découvrez l’artisanat d’exception et profitez d’offres exclusives. Ne ratez pas l’occasion de transformer votre style avec nos créations uniques.
      </p>
      <button
        type="button"
        className="bg-white text-black font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-200 transition duration-300"
      >
        Découvrir Maintenant
      </button>
    </section>
  );
};

export default ContactComponent;
