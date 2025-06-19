@component('mail::message')
# New Order Placed

You have received a new order.

**Order ID:** {{ $order->id }}

**User:** {{ $order->user->name }} ({{ $order->user->email }})

**Status:** {{ $order->status->value ?? $order->status }}

**Total Price:** ${{ number_format($order->total_price, 2) }}

## Products:

@foreach ($order->products as $product)
- {{ $product->title }}  
  Quantity: {{ $product->pivot->quantity }}  
  Price per item: ${{ number_format($product->pivot->price, 2) }}  
@endforeach

Thanks,<br>
{{ config('app.name') }}
@endcomponent
