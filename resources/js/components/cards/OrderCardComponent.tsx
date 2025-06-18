import React from 'react';
import { motion } from 'framer-motion';

const OrderCardComponent = ({ order }) => {
  return (
    <motion.div
      className="bg-white shadow-md rounded-2xl p-6 mb-4 border border-gray-100"
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">
          Commande n°{order.id}
        </h2>
        <span
          className={`px-3 py-1 text-sm rounded-full ${
            order.status === 'pending'
              ? 'bg-yellow-100 text-yellow-700'
              : order.status === 'paid'
              ? 'bg-green-100 text-green-700'
              : 'bg-gray-200 text-gray-600'
          }`}
        >
          {order.status}
        </span>
      </div>

      <div className="space-y-3">
        {order.products?.map((product) => (
          <div
            key={product.id}
            className="flex justify-between items-center border-b pb-2"
          >
            <div className="text-gray-700">
              <p className="font-medium">{product.title}</p>
              <p className="text-sm text-gray-500">
                Quantité : {product.pivot.quantity}
              </p>
            </div>
            <p className="text-gray-800 font-semibold">
              ${(product.pivot.price * product.pivot.quantity).toFixed(2)}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-4 flex justify-between items-center">
        <span className="text-gray-500 text-sm">
          {new Date(order.created_at).toLocaleDateString()}
        </span>
        <span className="font-bold text-blue-600">
          Total : ${order.total_price ? Number(order.total_price).toFixed(2) : '0.00'}
        </span>
      </div>
    </motion.div>
  );
};

export default OrderCardComponent;
