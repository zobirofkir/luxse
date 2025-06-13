import AboutComponent from '@/components/AboutComponent'
import AppLayout from '@/layouts/app-layout'
import React from 'react'

const AboutPage = () => {
  return (
    <AppLayout>
      <section>
        <AboutComponent />
      </section>
    </AppLayout>
  )
}

export default AboutPage