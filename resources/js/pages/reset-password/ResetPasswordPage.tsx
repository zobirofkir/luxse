import { getLayout } from '@/layouts/layout';
import React from 'react';
import { Head, useForm, usePage } from '@inertiajs/react';
import { motion } from 'framer-motion';

const ResetPasswordPage = ({ auth }) => {
  const Layout = getLayout(auth);
  const { flash } = usePage().props;

  const { data, setData, post, processing, errors } = useForm({
    email: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post('/forgot-password');
  };

  return (
    <Layout>
      <Head title="Mot de passe oublié" />
      <section className="min-h-screen flex items-center justify-center bg-gray-100 text-black px-4">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white p-8 rounded-xl shadow-md"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">
            Mot de passe oublié
          </h2>

          {flash.status && (
            <div className="mb-4 text-green-600 text-sm text-center font-medium">
              {flash.status}
            </div>
          )}

          {/* Email Input */}
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

          <button
            type="submit"
            disabled={processing}
            className="w-full bg-black text-white py-3 rounded-md font-semibold hover:bg-gray-800 transition"
          >
            Envoyer le lien de réinitialisation
          </button>

          <motion.div className='flex flex-col w-full justify-center items-center md:gap-2 gap-1 overflow-hidden'>
            <motion.a href='/login' className='text-black md:mt-4 mt-2 whitespace-nowrap'>
              Vous avez déjà un compte !
            </motion.a>
            <motion.a href='/register' className='text-black md:mt-4 mt-2 whitespace-nowrap'>
              Vous n'avez pas de compte ?
            </motion.a>
          </motion.div>
        </form>
      </section>
    </Layout>
  );
};

export default ResetPasswordPage;
