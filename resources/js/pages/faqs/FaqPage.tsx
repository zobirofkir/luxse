import FaqComponent from '@/components/FaqComponent'
import AppLayout from '@/layouts/app-layout'
import { getLayout } from '@/layouts/layout'
import { Head } from '@inertiajs/react'
import React from 'react'

const FaqPage = ({ auth }) => {
  const Layout = getLayout(auth)
  
  return (
    <Layout>
      <section>
        <Head title='Faqs'/>
        <FaqComponent />
      </section>
    </Layout>
  )
}

export default FaqPage