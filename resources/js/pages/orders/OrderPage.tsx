import { getLayout } from '@/layouts/layout';
import React from 'react'

function OrderPage({ auth }) {
    const Layout = getLayout(auth);
    
  return (
    <Layout>
        <section>
            Orders
        </section>
    </Layout>
  )
}

export default OrderPage