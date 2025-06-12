import SliderComponent from '@/components/SliderComponent'
import AppLayout from '@/layouts/app-layout'
import { Head } from '@inertiajs/react'

const WelcomePage = () => {
  return (
    <AppLayout>
      <Head title='Accueil'/>
      <SliderComponent />
    </AppLayout>
  )
}

export default WelcomePage