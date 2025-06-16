import AppLayout from '@/layouts/app-layout'
import ProductComponent from '@/components/ProductComponent'
import { Head } from '@inertiajs/react'

const ProductPage = () => {
  return (
    <AppLayout>
      <section>
        <Head title='Products'/>
        <ProductComponent />
      </section>
    </AppLayout>
  )
}

export default ProductPage