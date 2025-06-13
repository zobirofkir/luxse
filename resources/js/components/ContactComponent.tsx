import React from 'react';
import { FiPhone, FiMail } from 'react-icons/fi'; 
import { FaWhatsapp } from 'react-icons/fa';      

const ContactComponent = () => {
  return (
    <section className="bg-white text-black py-16 px-6 max-w-4xl mx-auto rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-8 text-center">Contactez-Nous</h2>

      {/* Map */}
      <div className="mb-10 rounded-lg overflow-hidden shadow-md">
        <iframe
          title="Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.999446820114!2d2.292292615673998!3d48.85837397928756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66ef7de159ec3%3A0x40b82c3688c9460!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1697094845651!5m2!1sfr!2sfr"
          width="100%"
          height="300"
          className="border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Contact info cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
        {/* Phone */}
        <a href="tel:+212612345678" className="flex flex-col items-center bg-gray-100 rounded-lg p-6 shadow hover:shadow-lg transition cursor-pointer hover:bg-gray-200">
          <FiPhone className="h-10 w-10 mb-3 text-black" />
          <p className="font-semibold text-lg">+212 6 12 34 56 78</p>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/212612345678"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center bg-gray-100 rounded-lg p-6 shadow hover:shadow-lg transition cursor-pointer hover:bg-gray-200"
        >
          <FaWhatsapp className="h-10 w-10 mb-3 text-green-600" />
          <p className="font-semibold text-lg">+212 6 12 34 56 78</p>
        </a>

        {/* Email */}
        <a href="mailto:contact@example.com" className="flex flex-col items-center bg-gray-100 rounded-lg p-6 shadow hover:shadow-lg transition cursor-pointer hover:bg-gray-200">
          <FiMail className="h-10 w-10 mb-3 text-black" />
          <p className="font-semibold text-lg">contact@example.com</p>
        </a>
      </div>

      {/* Contact Form */}
      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block mb-2 font-semibold">
            Nom
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Votre nom"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-2 font-semibold">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Votre email"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-2 font-semibold">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Votre message"
            className="w-full border border-gray-300 rounded-md px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-black"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-md font-semibold hover:bg-gray-800 transition"
        >
          Envoyer
        </button>
      </form>
    </section>
  );
};

export default ContactComponent;
