<?php

namespace App\Http\Controllers;

use App\Http\Requests\OrderRequest;
use App\Models\Order;
use App\Models\Product;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class OrderController extends Controller
{
    /**
     * Display user orders
     */
    public function index()
    {
        $orders = Order::with('products')->where('user_id', Auth::id())->get();

        return Inertia::render('orders/OrderPage', [
            'orders' => $orders
        ]);
    }

    /**
     * Store a new order
     */
    public function store(OrderRequest $request)
    {
        $validated = $request->validated();

        $totalPrice = 0;

        /**
         * Fetch products and calculate total
         */
        $productData = [];
        foreach ($validated['products'] as $item) {
            $product = Product::findOrFail($item['id']);
            $quantity = $item['quantity'];
            $price = $product->price;
            $totalPrice += $price * $quantity;

            $productData[$product->id] = [
                'quantity' => $quantity,
                'price' => $price,
            ];
        }

        /**
         * Create order
         */
        $order = Order::create([
            'user_id' => Auth::id(),
            'status' => 'pending',
            'total_price' => $totalPrice,
        ]);

        /**
         * Attach products
         */
        $order->products()->attach($productData);

        return redirect()->route('orders.index')->with('success', 'Order placed successfully!');
    }

    /**
     * Show a specific order
     */
    public function show($id)
    {
        $order = Order::with('products')->where('user_id', Auth::id())->findOrFail($id);

        return Inertia::render('orders/OrderPage', [
            'order' => $order
        ]);
    }
}
