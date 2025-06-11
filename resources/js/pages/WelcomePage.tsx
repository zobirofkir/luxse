import AppLayout from '@/layouts/app-layout'
import { Head } from '@inertiajs/react'

const WelcomePage = () => {
  return (
    <AppLayout>
      <Head title='Accueil'/>
      <h1 className='text-black dark:text-white'>Accueil</h1>
    </AppLayout>
  )
}

export default WelcomePage