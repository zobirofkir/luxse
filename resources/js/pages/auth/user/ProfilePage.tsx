import AuthLayout from '@/layouts/auth/auth-layout';
import { Head, useForm } from '@inertiajs/react';
import React, { useRef, useState, useEffect } from 'react';
import { User, Lock, Settings, Camera } from 'lucide-react';

const ProfilePage = ({ auth }) => {
  const fileInputRef = useRef(null);

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
    avatar_file: null, 
  });

  const [preview, setPreview] = useState(data.avatar_url || '');

  useEffect(() => {
    if (data.avatar_file) {
      const objectUrl = URL.createObjectURL(data.avatar_file);
      setPreview(objectUrl);

      return () => URL.revokeObjectURL(objectUrl);
    } else {
      setPreview(data.avatar_url || '');
    }
  }, [data.avatar_file]);

  function handleChooseAvatar() {
    fileInputRef.current?.click();
  }

  function handleAvatarChange(e) {
    if (e.target.files && e.target.files[0]) {
      setData('avatar_file', e.target.files[0]);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();

    for (const key in data) {
      if (key === 'avatar_file' && data.avatar_file) {
        formData.append('avatar_file', data.avatar_file);
      } else if (key !== 'avatar_file') {
        formData.append(key, data[key]);
      }
    }

    post(route('profile.update'), {
      data: formData,
      onSuccess: () => reset('current_password', 'new_password', 'new_password_confirmation', 'avatar_file'),
      preserveScroll: true,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    window.location.reload();
  }

  return (
    <AuthLayout>
      <Head title="Profil" />

      <section className="max-w-4xl mx-auto px-4 py-10">
        {/* En-tête */}
        <div className="flex items-center space-x-6 mb-10">
          <div className="relative w-24 h-24">
            <img
              src={preview || 'https://i.pravatar.cc/100?img=13'}
              alt="Avatar de l'utilisateur"
              className="w-24 h-24 rounded-full border border-gray-300 object-cover"
            />
            <button
              type="button"
              onClick={handleChooseAvatar}
              className="absolute bottom-0 right-0 bg-black bg-opacity-70 rounded-full p-2 hover:bg-opacity-90 transition"
              title="Changer l'avatar"
            >
              <Camera className="w-5 h-5 text-white" />
            </button>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              ref={fileInputRef}
              onChange={handleAvatarChange}
            />
          </div>

          <div>
            <h1 className="text-3xl font-bold text-gray-900">{auth.data.name}</h1>
            <p className="text-sm text-gray-500">{data.email}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-8">
          {/* Informations personnelles */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
            <div className="flex items-center mb-4">
              <User className="w-5 h-5 text-gray-500 mr-2" />
              <h2 className="text-lg font-semibold text-gray-700">Informations personnelles</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Prénom</label>
                <input
                  type="text"
                  className={`mt-1 w-full border rounded-md shadow-sm focus:ring-black focus:border-black ${
                    errors.first_name ? 'border-red-600' : 'border-gray-300'
                  }`}
                  value={data.first_name}
                  onChange={e => setData('first_name', e.target.value)}
                />
                {errors.first_name && <p className="text-red-600 text-sm mt-1">{errors.first_name}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                <input
                  type="text"
                  className={`mt-1 w-full border rounded-md shadow-sm focus:ring-black focus:border-black ${
                    errors.last_name ? 'border-red-600' : 'border-gray-300'
                  }`}
                  value={data.last_name}
                  onChange={e => setData('last_name', e.target.value)}
                />
                {errors.last_name && <p className="text-red-600 text-sm mt-1">{errors.last_name}</p>}
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Adresse email</label>
                <input
                  type="email"
                  disabled
                  className="mt-1 w-full border border-gray-300 rounded-md shadow-sm bg-gray-50 cursor-not-allowed"
                  value={data.email}
                />
              </div>
            </div>
          </div>

          {/* Paramètres du compte */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
            <div className="flex items-center mb-4">
              <Settings className="w-5 h-5 text-gray-500 mr-2" />
              <h2 className="text-lg font-semibold text-gray-700">Paramètres du compte</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nom d'utilisateur</label>
                <input
                  type="text"
                  className={`mt-1 w-full border rounded-md shadow-sm focus:ring-black focus:border-black ${
                    errors.username ? 'border-red-600' : 'border-gray-300'
                  }`}
                  value={data.username}
                  onChange={e => setData('username', e.target.value)}
                />
                {errors.username && <p className="text-red-600 text-sm mt-1">{errors.username}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Numéro de téléphone</label>
                <input
                  type="text"
                  className={`mt-1 w-full border rounded-md shadow-sm focus:ring-black focus:border-black ${
                    errors.phone ? 'border-red-600' : 'border-gray-300'
                  }`}
                  value={data.phone}
                  onChange={e => setData('phone', e.target.value)}
                />
                {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
              </div>
            </div>
          </div>

          {/* Sécurité */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
            <div className="flex items-center mb-4">
              <Lock className="w-5 h-5 text-gray-500 mr-2" />
              <h2 className="text-lg font-semibold text-gray-700">Sécurité</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mot de passe actuel</label>
                <input
                  type="password"
                  className={`mt-1 w-full border rounded-md shadow-sm focus:ring-black focus:border-black ${
                    errors.current_password ? 'border-red-600' : 'border-gray-300'
                  }`}
                  value={data.current_password}
                  onChange={e => setData('current_password', e.target.value)}
                />
                {errors.current_password && (
                  <p className="text-red-600 text-sm mt-1">{errors.current_password}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nouveau mot de passe</label>
                <input
                  type="password"
                  className={`mt-1 w-full border rounded-md shadow-sm focus:ring-black focus:border-black ${
                    errors.new_password ? 'border-red-600' : 'border-gray-300'
                  }`}
                  value={data.new_password}
                  onChange={e => setData('new_password', e.target.value)}
                />
                {errors.new_password && <p className="text-red-600 text-sm mt-1">{errors.new_password}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Confirmer le nouveau mot de passe
                </label>
                <input
                  type="password"
                  className={`mt-1 w-full border rounded-md shadow-sm focus:ring-black focus:border-black ${
                    errors.new_password_confirmation ? 'border-red-600' : 'border-gray-300'
                  }`}
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
