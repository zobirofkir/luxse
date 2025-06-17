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
import authLayout from '@/layouts/auth/auth-layout'
import { getLayout } from '@/layouts/layout'

const WelcomePage = ({ auth }) => {

  const Layout = getLayout(auth)

  return (
    <Layout>
      <Head title='Accueil'/>

      <SliderComponent />

      <BandComponent />

      <AboutComponent />

      <ProductComponent />

      <BandComponent />

      <CategoryComponent />

      <BandComponent />

      <TestimonialComponent />

      <BandComponent />

      <VideoComponent />

      <BandComponent />

      <ContactComponent />

    </Layout>
  )
}

export default WelcomePage