<?php

namespace App\Mail;

use App\Models\Order;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class OrderStatusChanged extends Mailable
{
    use Queueable, SerializesModels;

    public function __construct(public Order $order, public string $newStatus)
    {
    }

    public function build()
    {
        $statusLabels = [
            'en_attente' => 'En attente',
            'en_cours' => 'En cours de traitement',
            'expédié' => 'Expédiée',
            'livré' => 'Livrée',
            'annulé' => 'Annulée',
        ];

        return $this->subject('Mise à jour de votre commande #' . $this->order->id)
                    ->view('emails.order-status-changed')
                    ->with([
                        'order' => $this->order,
                        'statusLabel' => $statusLabels[$this->newStatus] ?? $this->newStatus,
                    ]);
    }
}