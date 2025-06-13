import ContactComponent from '@/components/ContactComponent'
import AppLayout from '@/layouts/app-layout'
import React from 'react'

const ContactPage = () => {
  return (
    <AppLayout>
      <section>
        <ContactComponent />
      </section>
    </AppLayout>
  )
}

export default ContactPage