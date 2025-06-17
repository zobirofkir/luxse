import ContactComponent from '@/components/ContactComponent'
import AppLayout from '@/layouts/app-layout'
import { getLayout } from '@/layouts/layout'
import { Head } from '@inertiajs/react'
import React from 'react'

const ContactPage = ({ auth }) => {
  const Layout = getLayout(auth)
  
  return (
    <Layout>
      <section>
        <Head title='Contact Us'/>
        <ContactComponent />
      </section>
    </Layout>
  )
}

export default ContactPage