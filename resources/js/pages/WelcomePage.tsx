import AboutComponent from '@/components/AboutComponent'
import ProductComponent from '@/components/ProductComponent'
import SliderComponent from '@/components/SliderComponent'
import AppLayout from '@/layouts/app-layout'
import { Head } from '@inertiajs/react'

const WelcomePage = () => {
  return (
    <AppLayout>
      <Head title='Accueil'/>

      <SliderComponent />

      <AboutComponent />

      <ProductComponent />

    </AppLayout>
  )
}

export default WelcomePage