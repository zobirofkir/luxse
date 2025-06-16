import CategoryComponent from '@/components/CategoryComponent'
import AppLayout from '@/layouts/app-layout'
import { Head } from '@inertiajs/react'
import React from 'react'

const CategoryPage = () => {
  return (
    <AppLayout>
      <section>
        <Head title='Categories'/>
        <CategoryComponent />
      </section>
    </AppLayout>
  )
}

export default CategoryPage