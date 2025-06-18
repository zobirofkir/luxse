import OrderCardComponent from '@/components/cards/OrderCardComponent';
import { getLayout } from '@/layouts/layout';
import React from 'react';

const OrderPage = ({ orders, auth }) => {

  const Layout = getLayout(auth)
  
  return (
    <Layout>
      <div className="p-4 max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Vos commandes</h1>
        {orders.length ? (
          orders.map((order) => <OrderCardComponent key={order.id} order={order} />)
        ) : (
          <p className="text-gray-500">Vous n'avez pas encore de commandes.</p>
        )}
      </div>
    </Layout>

  );
};

export default OrderPage;
