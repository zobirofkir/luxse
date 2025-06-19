<?php

namespace App\Filament\Widgets;

use Filament\Widgets\ChartWidget;
use App\Models\Product;
use Carbon\Carbon;

class ProductChart extends ChartWidget
{
    protected static ?string $heading = 'Statistiques des produits';

    protected function getData(): array
    {
        $months = collect(range(1, 12))->map(function ($month) {
            return Carbon::create(null, $month, 1)->locale('fr')->monthName;
        });

        $productCounts = collect(range(1, 12))->map(function ($month) {
            return Product::whereMonth('created_at', $month)
                ->whereYear('created_at', now()->year)
                ->count();
        });

        return [
            'datasets' => [
                [
                    'label' => 'Nombre de produits publiés',
                    'data' => $productCounts->toArray(),
                    'fill' => false,
                    'borderColor' => 'rgba(255, 99, 132, 1)',
                    'backgroundColor' => 'rgba(255, 99, 132, 0.2)',
                    'tension' => 0.3,
                ],
            ],
            'labels' => $months->toArray(),
        ];
    }

    protected function getType(): string
    {
        return 'line';
    }
}
