import AuthLayout from '@/layouts/auth/auth-layout'
import { Head } from '@inertiajs/react'
import React from 'react'

const ProfilePage = () => {
  return (
      <AuthLayout>
        <section>
            <Head title='Profile'/>
            Profile Page
        </section>
      </AuthLayout>
  )
}

export default ProfilePage