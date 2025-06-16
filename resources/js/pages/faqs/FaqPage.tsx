import FaqComponent from '@/components/FaqComponent'
import AppLayout from '@/layouts/app-layout'
import { Head } from '@inertiajs/react'
import React from 'react'

const FaqPage = () => {
  return (
    <AppLayout>
      <section>
        <Head title='Faqs'/>
        <FaqComponent />
      </section>
    </AppLayout>
  )
}

export default FaqPage