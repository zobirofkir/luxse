import AppLayout from '@/layouts/app-layout'
import ProductComponent from '@/components/ProductComponent'
import { Head } from '@inertiajs/react'
import { getLayout } from '@/layouts/layout'

const ProductPage = ({ auth }) => {

  const Layout = getLayout(auth)

  return (
    <Layout>
      <section>
        <Head title='Products'/>
        <ProductComponent />
      </section>
    </Layout>
  )
}

export default ProductPage