import AppLayout from '@/layouts/app-layout';
import React from 'react';

const ProductDetailPage = ({ id }) => {
  return (
    <AppLayout>
      <section>
        Your product is {id}
      </section>
    </AppLayout>
  );
};

export default ProductDetailPage;
