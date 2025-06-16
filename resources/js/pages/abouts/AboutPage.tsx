import AboutComponent from '@/components/AboutComponent'
import AppLayout from '@/layouts/app-layout'
import { Head } from '@inertiajs/react'
import React from 'react'

const AboutPage = () => {
  return (
    <AppLayout>
      <section>
        <Head title='About Us'/>
        <AboutComponent />
      </section>
    </AppLayout>
  )
}

export default AboutPage