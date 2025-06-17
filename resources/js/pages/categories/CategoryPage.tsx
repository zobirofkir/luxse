import CategoryComponent from '@/components/CategoryComponent'
import AppLayout from '@/layouts/app-layout'
import { getLayout } from '@/layouts/layout'
import { Head } from '@inertiajs/react'
import React from 'react'

const CategoryPage = ({ auth }) => {
  const Layout = getLayout(auth)
  
  return (
    <Layout>
      <section>
        <Head title='Categories'/>
        <CategoryComponent />
      </section>
    </Layout>
  )
}

export default CategoryPage