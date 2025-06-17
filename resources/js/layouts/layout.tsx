import AppLayout from './app-layout'
import AuthLayout from './auth/auth-layout'

export const getLayout = (auth) => {
  return auth?.user ? AuthLayout : AppLayout
}