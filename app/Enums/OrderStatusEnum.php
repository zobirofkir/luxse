<?php

namespace App\Enums;

enum OrderStatusEnum: string
{
    case EN_ATTENTE = 'pending';       
    case EN_COURS = 'processing';      
    case EXPÉDIÉ = 'shipped';         
    case LIVRÉ = 'delivered';         
    case ANNULÉ = 'cancelled';        
}
