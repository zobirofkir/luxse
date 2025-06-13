import React from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiMail } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const ContactComponent = () => {
  return (
    <section className="bg-white text-black py-20 px-6 sm:px-10 max-w-7xl mx-auto">
      {/* Titre */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-extrabold uppercase tracking-widest text-center mb-14 relative"
      >
        Contactez-Nous
        <span className="block w-24 h-1 bg-rose-500 mx-auto mt-2 rounded-full"></span>
      </motion.h2>

      {/* Carte */}
      <div className="mb-12 rounded-3xl overflow-hidden shadow-md border border-gray-200">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.999446820114!2d2.292292615673998!3d48.85837397928756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66ef7de159ec3%3A0x40b82c3688c9460!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1697094845651!5m2!1sfr!2sfr"
          className="w-full h-80 sm:h-[400px] border-0"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Infos de contact */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-14">
        {[
          {
            icon: <FiPhone className="h-8 w-8 text-black" />,
            label: '+212 6 12 34 56 78',
            href: 'tel:+212612345678',
          },
          {
            icon: <FaWhatsapp className="h-8 w-8 text-green-600" />,
            label: '+212 6 12 34 56 78',
            href: 'https://wa.me/212612345678',
          },
          {
            icon: <FiMail className="h-8 w-8 text-black" />,
            label: 'contact@example.com',
            href: 'mailto:contact@example.com',
          },
        ].map((item, i) => (
          <motion.a
            key={i}
            href={item.href}
            target={item.href.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="flex flex-col items-center text-center bg-gray-100 rounded-2xl p-6 shadow hover:shadow-xl hover:bg-gray-200 transition"
          >
            {item.icon}
            <p className="mt-3 font-semibold">{item.label}</p>
          </motion.a>
        ))}
      </div>

      {/* Formulaire */}
      <motion.form
        className="grid grid-cols-1 gap-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <label htmlFor="name" className="block mb-2 font-medium">
            Nom
          </label>
          <input
            type="text"
            id="name"
            placeholder="Votre nom"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-2 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Votre email"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-2 font-medium">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            placeholder="Votre message"
            className="w-full border border-gray-300 rounded-md px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-black"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full sm:w-1/2 mx-auto bg-black text-white py-3 rounded-md font-semibold hover:bg-gray-800 transition"
        >
          Envoyer
        </button>
      </motion.form>
    </section>
  );
};

export default ContactComponent;
