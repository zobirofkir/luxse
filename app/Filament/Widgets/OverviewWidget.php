<?php

namespace App\Filament\Widgets;

use App\Models\Blog;
use App\Models\Category;
use App\Models\Product;
use App\Models\Project;
use App\Models\Service;
use App\Models\Tag;
use App\Models\User;
use App\Models\Order;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class OverviewWidget extends BaseWidget
{
    protected function getStats(): array
    {
        return [
            Stat::make('Produits en vitrine', Product::count())
                ->description('Nombre total de bijoux publiés')
                ->color('success')
                ->icon('heroicon-o-sparkles'),

            Stat::make('Commandes reçues', Order::count())
                ->description('Nombre total de commandes effectuées')
                ->color('primary')
                ->icon('heroicon-o-credit-card'),

            Stat::make('Catégories de bijoux', Category::count())
                ->description('Nombre de catégories disponibles')
                ->color('info')
                ->icon('heroicon-o-clipboard-document'),

            Stat::make('Utilisateurs inscrits', User::count())
                ->description('Nombre total de clients enregistrés')
                ->color('secondary')
                ->icon('heroicon-o-user-group'),
        ];
    }
}
