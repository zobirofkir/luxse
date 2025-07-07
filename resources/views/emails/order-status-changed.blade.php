<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Mise à jour de commande</title>
</head>
<body>
    <h2>Bonjour {{ $order->user->name }},</h2>
    
    <p>Le statut de votre commande #{{ $order->id }} a été mis à jour.</p>
    
    <p><strong>Nouveau statut :</strong> {{ $statusLabel }}</p>
    
    <p>Merci pour votre confiance.</p>
    
    <p>Cordialement,<br>L'équipe</p>
</body>
</html>