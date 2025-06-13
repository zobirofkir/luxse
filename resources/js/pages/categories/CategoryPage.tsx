import CategoryComponent from '@/components/CategoryComponent'
import AppLayout from '@/layouts/app-layout'
import React from 'react'

const CategoryPage = () => {
  return (
    <AppLayout>
      <section>
        <CategoryComponent />
      </section>
    </AppLayout>
  )
}

export default CategoryPage