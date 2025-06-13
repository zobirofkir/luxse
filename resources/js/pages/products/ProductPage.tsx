import AppLayout from '@/layouts/app-layout'
import ProductComponent from '@/components/ProductComponent'

const ProductPage = () => {
  return (
    <AppLayout>
      <section>
        <ProductComponent />
      </section>
    </AppLayout>
  )
}

export default ProductPage