import AboutComponent from '@/components/AboutComponent'
import AppLayout from '@/layouts/app-layout'
import { getLayout } from '@/layouts/layout'
import { Head } from '@inertiajs/react'
import React from 'react'

const AboutPage = ({auth}) => {
  
  const Layout = getLayout(auth)
  
  return (
    <Layout>
      <section>
        <Head title='About Us'/>
        <AboutComponent />
      </section>
    </Layout>
  )
}

export default AboutPage