import { getLayout } from '@/layouts/layout';
import React from 'react'

const ResetPasswordPage = ({ auth }) => {

  const Layout = getLayout(auth);

  return (
    <Layout>
      <section>
        Reset Password Form
      </section>
    </Layout>
  )
}

export default ResetPasswordPage