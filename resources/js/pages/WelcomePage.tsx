import AboutComponent from '@/components/AboutComponent'
import ContactComponent from '@/components/ContactComponent'
import CategoryComponent from '@/components/CategoryComponent'
import ProductComponent from '@/components/ProductComponent'
import SliderComponent from '@/components/SliderComponent'
import TestimonialComponent from '@/components/TestimonialComponent'
import VideoComponent from '@/components/VideoComponent'
import AppLayout from '@/layouts/app-layout'
import { Head } from '@inertiajs/react'
import BandComponent from '@/components/BandComponent'
import LiveComponent from '@/components/LiveComponent'

const WelcomePage = () => {
  return (
    <AppLayout>
      <Head title='Accueil'/>

      <SliderComponent />

      <BandComponent />

      <AboutComponent />

      <ProductComponent />

      <CategoryComponent />

      <TestimonialComponent />

      <VideoComponent />

      <ContactComponent />

    </AppLayout>
  )
}

export default WelcomePage