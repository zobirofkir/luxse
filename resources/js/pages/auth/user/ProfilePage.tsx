import AuthLayout from '@/layouts/auth/auth-layout';
import { Head } from '@inertiajs/react';
import React from 'react';
import { User, Lock, Settings } from 'lucide-react';

const ProfilePage = () => {
  return (
    <AuthLayout>
      <Head title="Profile" />

      <section className="max-w-4xl mx-auto px-4 py-10">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-10">
          <img
            src="https://i.pravatar.cc/100?img=13"
            alt="User Avatar"
            className="w-20 h-20 rounded-full border border-gray-300"
          />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">John Doe</h1>
            <p className="text-sm text-gray-500">john.doe@example.com</p>
          </div>
        </div>

        {/* Personal Info */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center mb-4">
            <User className="w-5 h-5 text-gray-500 mr-2" />
            <h2 className="text-lg font-semibold text-gray-700">Personal Information</h2>
          </div>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700">First Name</label>
              <input
                type="text"
                className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
                defaultValue="John"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Last Name</label>
              <input
                type="text"
                className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
                defaultValue="Doe"
              />
            </div>
            <div className="md:col-span-2">
              <label className="text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
                defaultValue="john.doe@example.com"
              />
            </div>
          </form>
        </div>

        {/* Account Settings */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center mb-4">
            <Settings className="w-5 h-5 text-gray-500 mr-2" />
            <h2 className="text-lg font-semibold text-gray-700">Account Settings</h2>
          </div>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700">Username</label>
              <input
                type="text"
                className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
                defaultValue="johndoe"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="text"
                className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
                defaultValue="+212600000000"
              />
            </div>
          </form>
        </div>

        {/* Security */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center mb-4">
            <Lock className="w-5 h-5 text-gray-500 mr-2" />
            <h2 className="text-lg font-semibold text-gray-700">Security</h2>
          </div>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700">Current Password</label>
              <input
                type="password"
                className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">New Password</label>
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
            Cancel
          </button>
          <button className="px-4 py-2 text-sm bg-black text-white rounded-md hover:bg-gray-900 transition">
            Save Changes
          </button>
        </div>
      </section>
    </AuthLayout>
  );
};

export default ProfilePage;
