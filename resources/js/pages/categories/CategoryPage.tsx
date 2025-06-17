import CategoryComponent from '@/components/CategoryComponent'
import { getLayout } from '@/layouts/layout'
import { Head, usePage } from '@inertiajs/react'
import React from 'react'

const CategoryPage = ({ auth }) => {
  const Layout = getLayout(auth)
  const { categories } = usePage().props

  return (
    <Layout>
      <section className="p-6">
        <Head title="Catégories" />
        <CategoryComponent categories={categories} />
      </section>
    </Layout>
  )
}

export default CategoryPage
