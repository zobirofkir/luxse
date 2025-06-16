import ContactComponent from '@/components/ContactComponent'
import AppLayout from '@/layouts/app-layout'
import { Head } from '@inertiajs/react'
import React from 'react'

const ContactPage = () => {
  return (
    <AppLayout>
      <section>
        <Head title='Contact Us'/>
        <ContactComponent />
      </section>
    </AppLayout>
  )
}

export default ContactPage