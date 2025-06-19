import { getLayout } from '@/layouts/layout';
import React from 'react';
import { Head, useForm, usePage } from '@inertiajs/react';
import { motion } from 'framer-motion';

const NewPasswordPage = ({ auth, token, email: initialEmail }) => {
  const Layout = getLayout(auth);
  const { flash } = usePage().props;

  const { data, setData, post, processing, errors } = useForm({
    token: token || '',
    email: initialEmail || '',
    password: '',
    password_confirmation: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post('/reset-password');
  };

  return (
    <Layout>
      <Head title="Nouveau mot de passe" />
      <section className="min-h-screen flex items-center justify-center bg-gray-100 text-black px-4">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white p-8 rounded-xl shadow-md"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">
            Nouveau mot de passe
          </h2>

          {flash.status && (
            <div className="mb-4 text-green-600 text-sm text-center font-medium">
              {flash.status}
            </div>
          )}

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium mb-1">
              Adresse e-mail
            </label>
            <input
              type="email"
              id="email"
              value={data.email}
              onChange={(e) => setData('email', e.target.value)}
              required
              placeholder="email@exemple.com"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            />
            {errors.email && (
              <div className="text-red-500 mt-1 text-sm">{errors.email}</div>
            )}
          </div>

          {/* Password */}
          <div className="mb-4">
            <label htmlFor="password" className="block font-medium mb-1">
              Nouveau mot de passe
            </label>
            <input
              type="password"
              id="password"
              value={data.password}
              onChange={(e) => setData('password', e.target.value)}
              required
              placeholder="********"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            />
            {errors.password && (
              <div className="text-red-500 mt-1 text-sm">{errors.password}</div>
            )}
          </div>

          {/* Confirm Password */}
          <div className="mb-6">
            <label htmlFor="password_confirmation" className="block font-medium mb-1">
              Confirmer le mot de passe
            </label>
            <input
              type="password"
              id="password_confirmation"
              value={data.password_confirmation}
              onChange={(e) => setData('password_confirmation', e.target.value)}
              required
              placeholder="********"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            />
            {errors.password_confirmation && (
              <div className="text-red-500 mt-1 text-sm">{errors.password_confirmation}</div>
            )}
          </div>

          <button
            type="submit"
            disabled={processing}
            className="w-full bg-black text-white py-3 rounded-md font-semibold hover:bg-gray-800 transition"
          >
            Réinitialiser le mot de passe
          </button>

          <motion.div className='flex flex-col w-full justify-center items-center md:gap-2 gap-1 overflow-hidden mt-4'>
            <motion.a href='/login' className='text-black whitespace-nowrap'>
              Retour à la connexion
            </motion.a>
          </motion.div>
        </form>
      </section>
    </Layout>
  );
};

export default NewPasswordPage;
