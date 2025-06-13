import AboutComponent from '@/components/AboutComponent'
import CategoryComponent from '@/components/CategoryComponent'
import ProductComponent from '@/components/ProductComponent'
import SliderComponent from '@/components/SliderComponent'
import TestimonialComponent from '@/components/TestimonialComponent'
import AppLayout from '@/layouts/app-layout'
import { Head } from '@inertiajs/react'

const WelcomePage = () => {
  return (
    <AppLayout>
      <Head title='Accueil'/>

      <SliderComponent />

      <AboutComponent />

      <ProductComponent />

      <CategoryComponent />

      <TestimonialComponent />

    </AppLayout>
  )
}

export default WelcomePage