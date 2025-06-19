<?php

namespace App\Filament\Widgets;

use App\Models\Blog;
use App\Models\Category;
use App\Models\Product;
use App\Models\Project;
use App\Models\Service;
use App\Models\Tag;
use App\Models\User;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class AperçuWidget extends BaseWidget
{
    protected function getStats(): array
    {
        return [
            Stat::make('Produits publiés', Product::count())
                ->description('Nombre total de produits publiés')
                ->color('warning')
                ->icon('heroicon-o-document-text'),

            Stat::make('Catégories créées', Category::count())
                ->description('Nombre total de catégories créées')
                ->color('warning')
                ->icon('heroicon-o-rectangle-group'),
        ];
    }
}
