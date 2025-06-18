import AuthLayout from '@/layouts/auth/auth-layout';
import { Head } from '@inertiajs/react';
import React from 'react';
import { User, Lock, Settings } from 'lucide-react';

const ProfilePage = ({ auth }) => {
  return (
    <AuthLayout>
      <Head title="Profile" />

      <section className="max-w-4xl mx-auto px-4 py-10">
        {/* En-tête */}
        <div className="flex items-center space-x-4 mb-10">
          <img
            src={auth.data.avatar_url || "https://i.pravatar.cc/100?img=13"}
            alt="Avatar de l'utilisateur"
            className="w-20 h-20 rounded-full border border-gray-300"
          />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{auth.data.name}</h1>
            <p className="text-sm text-gray-500">{auth.data.email}</p>
          </div>
        </div>

        {/* Informations personnelles */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center mb-4">
            <User className="w-5 h-5 text-gray-500 mr-2" />
            <h2 className="text-lg font-semibold text-gray-700">Informations personnelles</h2>
          </div>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700">Prénom</label>
              <input
                type="text"
                className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
                defaultValue={auth.data.first_name}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Nom</label>
              <input
                type="text"
                className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
                defaultValue={auth.data.last_name}
              />
            </div>
            <div className="md:col-span-2">
              <label className="text-sm font-medium text-gray-700">Adresse email</label>
              <input
                type="email"
                className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
                defaultValue={auth.data.email}
              />
            </div>
          </form>
        </div>

        {/* Paramètres du compte */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center mb-4">
            <Settings className="w-5 h-5 text-gray-500 mr-2" />
            <h2 className="text-lg font-semibold text-gray-700">Paramètres du compte</h2>
          </div>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700">Nom d'utilisateur</label>
              <input
                type="text"
                className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
                defaultValue={auth.data.username}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Numéro de téléphone</label>
              <input
                type="text"
                className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
                defaultValue={auth.data.phone}
              />
            </div>
          </form>
        </div>

        {/* Sécurité */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center mb-4">
            <Lock className="w-5 h-5 text-gray-500 mr-2" />
            <h2 className="text-lg font-semibold text-gray-700">Sécurité</h2>
          </div>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700">Mot de passe actuel</label>
              <input
                type="password"
                className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Nouveau mot de passe</label>
              <input
                type="password"
                className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
              />
            </div>
          </form>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3">
          <button className="px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md transition">
            Annuler
          </button>
          <button className="px-4 py-2 text-sm bg-black text-white rounded-md hover:bg-gray-900 transition">
            Enregistrer les modifications
          </button>
        </div>
      </section>
    </AuthLayout>
  );
};

export default ProfilePage;