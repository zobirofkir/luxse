import { getLayout } from '@/layouts/layout';
import React from 'react';

function OrderPage({ auth }) {
    const Layout = getLayout(auth);
    
    // Sample data - replace with your actual data
    const shippedProducts = [
        {
            id: 'ORD-1001',
            product: 'Wireless Headphones',
            date: '2023-05-15',
            status: 'Delivered',
            tracking: 'UPS-123456789',
            image: 'https://media.istockphoto.com/id/481365786/fr/photo/diamond.jpg?s=612x612&w=0&k=20&c=FqikD3QL45ZOl7UdgCjz4HJjd4p6j0o46UrPLlayUbg='
        },
        {
            id: 'ORD-1002',
            product: 'Smart Watch',
            date: '2023-06-02',
            status: 'In Transit',
            tracking: 'FEDEX-987654321',
            image: 'https://media.istockphoto.com/id/481365786/fr/photo/diamond.jpg?s=612x612&w=0&k=20&c=FqikD3QL45ZOl7UdgCjz4HJjd4p6j0o46UrPLlayUbg='
        },
        {
            id: 'ORD-1003',
            product: 'graytooth Speaker',
            date: '2023-06-10',
            status: 'Shipped',
            tracking: 'USPS-567891234',
            image: 'https://media.istockphoto.com/id/481365786/fr/photo/diamond.jpg?s=612x612&w=0&k=20&c=FqikD3QL45ZOl7UdgCjz4HJjd4p6j0o46UrPLlayUbg='
        },
        {
            id: 'ORD-1004',
            product: 'graytooth Speaker',
            date: '2023-06-10',
            status: 'Shipped',
            tracking: 'USPS-567891234',
            image: 'https://media.istockphoto.com/id/481365786/fr/photo/diamond.jpg?s=612x612&w=0&k=20&c=FqikD3QL45ZOl7UdgCjz4HJjd4p6j0o46UrPLlayUbg='
        },
        {
            id: 'ORD-1005',
            product: 'graytooth Speaker',
            date: '2023-06-10',
            status: 'Shipped',
            tracking: 'USPS-567891234',
            image: 'https://media.istockphoto.com/id/481365786/fr/photo/diamond.jpg?s=612x612&w=0&k=20&c=FqikD3QL45ZOl7UdgCjz4HJjd4p6j0o46UrPLlayUbg='
        },
        {
            id: 'ORD-1006',
            product: 'graytooth Speaker',
            date: '2023-06-10',
            status: 'Shipped',
            tracking: 'USPS-567891234',
            image: 'https://media.istockphoto.com/id/481365786/fr/photo/diamond.jpg?s=612x612&w=0&k=20&c=FqikD3QL45ZOl7UdgCjz4HJjd4p6j0o46UrPLlayUbg='
        },
        {
            id: 'ORD-1007',
            product: 'graytooth Speaker',
            date: '2023-06-10',
            status: 'Shipped',
            tracking: 'USPS-567891234',
            image: 'https://media.istockphoto.com/id/481365786/fr/photo/diamond.jpg?s=612x612&w=0&k=20&c=FqikD3QL45ZOl7UdgCjz4HJjd4p6j0o46UrPLlayUbg='
        },
        {
            id: 'ORD-1008',
            product: 'graytooth Speaker',
            date: '2023-06-10',
            status: 'Shipped',
            tracking: 'USPS-567891234',
            image: 'https://media.istockphoto.com/id/481365786/fr/photo/diamond.jpg?s=612x612&w=0&k=20&c=FqikD3QL45ZOl7UdgCjz4HJjd4p6j0o46UrPLlayUbg='
        },
    ];

    const getStatusColor = (status) => {
        switch(status.toLowerCase()) {
            case 'delivered': return 'bg-green-100 text-green-800';
            case 'in transit': return 'bg-gray-100 text-gray-800';
            case 'shipped': return 'bg-purple-100 text-purple-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <Layout>
            <section className="p-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">Shipped Products</h1>
                
                <div className="bg-white rounded-lg shadow overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tracking</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {shippedProducts.map((product) => (
                                    <tr key={product.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{product.id}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 h-10 w-10">
                                                    <img className="h-10 w-10 rounded-md" src={product.image} alt={product.product} />
                                                </div>
                                                <div className="ml-4">
                                                    <div className="text-sm font-medium text-gray-900">{product.product}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.date}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(product.status)}`}>
                                                {product.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 hover:text-gray-700">
                                            <a href="#" className="underline">{product.tracking}</a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Mobile view cards */}
                <div className="mt-6 sm:hidden">
                    {shippedProducts.map((product) => (
                        <div key={product.id} className="bg-white p-4 rounded-lg shadow mb-4">
                            <div className="flex items-center space-x-4 mb-3">
                                <img className="h-12 w-12 rounded-md" src={product.image} alt={product.product} />
                                <div>
                                    <h3 className="font-medium text-gray-900">{product.product}</h3>
                                    <p className="text-sm text-gray-500">{product.id}</p>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <span className="text-sm text-gray-500">Date</span>
                                    <span className="text-sm">{product.date}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-sm text-gray-500">Status</span>
                                    <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(product.status)}`}>
                                        {product.status}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-sm text-gray-500">Tracking</span>
                                    <a href="#" className="text-sm text-gray-500">{product.tracking}</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </Layout>
    );
}

export default OrderPage;