import AuthLayout from '@/layouts/auth/auth-layout';
import { Head, useForm } from '@inertiajs/react';
import React from 'react';
import { User, Lock, Settings } from 'lucide-react';

const ProfilePage = ({ auth }) => {
  const { data, setData, post, processing, errors, reset } = useForm({
    first_name: auth.data.first_name || '',
    last_name: auth.data.last_name || '',
    email: auth.data.email || '',
    username: auth.data.username || '',
    phone: auth.data.phone || '',
    avatar_url: auth.data.avatar_url || '',
    current_password: '',
    new_password: '',
    new_password_confirmation: '',
  });

  function handleSubmit(e) {
    e.preventDefault();
    post(route('profile.update'), {
      onSuccess: () => reset('current_password', 'new_password', 'new_password_confirmation'),
    });
  }

  return (
    <AuthLayout>
      <Head title="Profil" />

      <section className="max-w-4xl mx-auto px-4 py-10">
        {/* En-tête */}
        <div className="flex items-center space-x-4 mb-10">
          <img
            src={data.avatar_url || 'https://i.pravatar.cc/100?img=13'}
            alt="Avatar de l'utilisateur"
            className="w-20 h-20 rounded-full border border-gray-300"
          />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{auth.data.name}</h1>
            <p className="text-sm text-gray-500">{data.email}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Informations personnelles */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 mb-8">
            <div className="flex items-center mb-4">
              <User className="w-5 h-5 text-gray-500 mr-2" />
              <h2 className="text-lg font-semibold text-gray-700">Informations personnelles</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700">Prénom</label>
                <input
                  type="text"
                  className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
                  value={data.first_name}
                  onChange={e => setData('first_name', e.target.value)}
                />
                {errors.first_name && <p className="text-red-600 text-sm mt-1">{errors.first_name}</p>}
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Nom</label>
                <input
                  type="text"
                  className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
                  value={data.last_name}
                  onChange={e => setData('last_name', e.target.value)}
                />
                {errors.last_name && <p className="text-red-600 text-sm mt-1">{errors.last_name}</p>}
              </div>
              <div className="md:col-span-2">
                <label className="text-sm font-medium text-gray-700">Adresse email</label>
                <input
                  type="email"
                  className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
                  value={data.email}
                  disabled
                />
              </div>
            </div>
          </div>

          {/* Paramètres du compte */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 mb-8">
            <div className="flex items-center mb-4">
              <Settings className="w-5 h-5 text-gray-500 mr-2" />
              <h2 className="text-lg font-semibold text-gray-700">Paramètres du compte</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700">Nom d'utilisateur</label>
                <input
                  type="text"
                  className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
                  value={data.username}
                  onChange={e => setData('username', e.target.value)}
                />
                {errors.username && <p className="text-red-600 text-sm mt-1">{errors.username}</p>}
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Numéro de téléphone</label>
                <input
                  type="text"
                  className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
                  value={data.phone}
                  onChange={e => setData('phone', e.target.value)}
                />
                {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
              </div>
            </div>
          </div>

          {/* Sécurité */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 mb-8">
            <div className="flex items-center mb-4">
              <Lock className="w-5 h-5 text-gray-500 mr-2" />
              <h2 className="text-lg font-semibold text-gray-700">Sécurité</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700">Mot de passe actuel</label>
                <input
                  type="password"
                  className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
                  value={data.current_password}
                  onChange={e => setData('current_password', e.target.value)}
                />
                {errors.current_password && (
                  <p className="text-red-600 text-sm mt-1">{errors.current_password}</p>
                )}
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Nouveau mot de passe</label>
                <input
                  type="password"
                  className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
                  value={data.new_password}
                  onChange={e => setData('new_password', e.target.value)}
                />
                {errors.new_password && <p className="text-red-600 text-sm mt-1">{errors.new_password}</p>}
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Confirmer le nouveau mot de passe</label>
                <input
                  type="password"
                  className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
                  value={data.new_password_confirmation}
                  onChange={e => setData('new_password_confirmation', e.target.value)}
                />
                {errors.new_password_confirmation && (
                  <p className="text-red-600 text-sm mt-1">{errors.new_password_confirmation}</p>
                )}
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3">
            <button
              type="button"
              className="px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md transition"
              onClick={() => reset()}
              disabled={processing}
            >
              Annuler
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm bg-black text-white rounded-md hover:bg-gray-900 transition"
              disabled={processing}
            >
              Enregistrer les modifications
            </button>
          </div>
        </form>
      </section>
    </AuthLayout>
  );
};

export default ProfilePage;
