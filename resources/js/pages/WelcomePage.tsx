import AboutComponent from '@/components/AboutComponent'
import SliderComponent from '@/components/SliderComponent'
import AppLayout from '@/layouts/app-layout'
import { Head } from '@inertiajs/react'

const WelcomePage = () => {
  return (
    <AppLayout>
      <Head title='Accueil'/>
      <SliderComponent />

      <AboutComponent />

      
    </AppLayout>
  )
}

export default WelcomePage