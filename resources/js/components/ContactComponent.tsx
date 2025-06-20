import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { useForm } from '@inertiajs/react';
import { FiPhone, FiMail } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { LanguageContext } from '@/contexts/LanguageContext';
import { contactTranslation } from '@/translation/contactTranslation';

const ContactComponent = () => {
  const { language } = useContext(LanguageContext);
  const t = contactTranslation[language];

  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    post('/contacts', {
      onSuccess: () => reset(),
    });
  };

  return (
    <section
      className={`bg-white text-black py-20 px-6 sm:px-10 max-w-7xl mx-auto ${
        language === 'ar' ? 'text-right' : 'text-left'
      }`}
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      {/* Title */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-16">
        <div className="flex items-center gap-4">
          <div className="w-1 h-12 bg-rose-500 rounded-full"></div>
          <motion.h2
            initial={{ opacity: 0, x: language === 'ar' ? 30 : -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-extrabold uppercase tracking-widest text-gray-800"
          >
            {t.title}
          </motion.h2>
        </div>
      </div>

      {/* Google Map */}
      <div className="mb-12 rounded-3xl overflow-hidden shadow-md border border-gray-200">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=..."
          className="w-full h-80 sm:h-[400px] border-0"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Contact Info */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-14">
        {[
          {
            icon: <FiPhone className="h-8 w-8 text-black" />,
            label: t.phoneLabel,
            href: 'tel:+212612345678',
          },
          {
            icon: <FaWhatsapp className="h-8 w-8 text-green-600" />,
            label: t.whatsappLabel,
            href: 'https://wa.me/212612345678',
          },
          {
            icon: <FiMail className="h-8 w-8 text-black" />,
            label: t.emailLabel,
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

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <label htmlFor="name" className="block mb-2 font-medium">
            {t.form.nameLabel}
          </label>
          <input
            type="text"
            id="name"
            value={data.name}
            onChange={(e) => setData('name', e.target.value)}
            placeholder={t.form.namePlaceholder}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block mb-2 font-medium">
            {t.form.emailLabel}
          </label>
          <input
            type="email"
            id="email"
            value={data.email}
            onChange={(e) => setData('email', e.target.value)}
            placeholder={t.form.emailPlaceholder}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="message" className="block mb-2 font-medium">
            {t.form.messageLabel}
          </label>
          <textarea
            id="message"
            rows={4}
            value={data.message}
            onChange={(e) => setData('message', e.target.value)}
            placeholder={t.form.messagePlaceholder}
            className="w-full border border-gray-300 rounded-md px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-black"
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>

        <button
          type="submit"
          disabled={processing}
          className="w-full sm:w-1/2 mx-auto bg-black text-white py-3 rounded-md font-semibold hover:bg-gray-800 transition"
        >
          {processing ? t.form.submit.sending : t.form.submit.send}
        </button>
      </motion.form>
    </section>
  );
};

export default ContactComponent;
