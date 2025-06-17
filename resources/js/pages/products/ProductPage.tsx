import AppLayout from '@/layouts/app-layout'
import ProductComponent from '@/components/ProductComponent'
import { Head } from '@inertiajs/react'
import { getLayout } from '@/layouts/layout'

const ProductPage = ({ auth, products }) => {
  const Layout = getLayout(auth)

  return (
    <Layout>
      <section>
        <Head title='Products'/>
        <ProductComponent products={products} />
      </section>
    </Layout>
  )
}
export default ProductPage