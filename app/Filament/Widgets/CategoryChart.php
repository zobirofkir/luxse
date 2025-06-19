<?php

namespace App\Filament\Widgets\Overview;

use Filament\Widgets\ChartWidget;
use App\Models\Category;
use App\Models\User;
use Carbon\Carbon;

class CategoryChart extends ChartWidget
{
    /**
     * Titre affiché au-dessus du graphique
     */
    protected static ?string $heading = 'Statistiques des catégories';

    protected function getData(): array
    {
        /**
         * Récupérer les noms des mois de l'année en cours (Janvier à Décembre)
         */
        $months = collect(range(1, 12))->map(function ($month) {
            return Carbon::create(null, $month, 1)->locale('fr')->monthName;
        });

        /**
         * Compter le nombre de catégories créées chaque mois de l'année en cours
         */
        $categoryCounts = collect(range(1, 12))->map(function ($month) {
            return Category::whereMonth('created_at', $month)
                ->whereYear('created_at', now()->year)
                ->count();
        });

        return [
            'datasets' => [
                [
                    'label' => 'Nombre de catégories',
                    'data' => $categoryCounts->toArray(),
                    'backgroundColor' => 'rgba(54, 162, 235, 0.5)',
                    'borderColor' => 'rgba(54, 162, 235, 1)',
                    'borderWidth' => 1,
                ],
            ],
            'labels' => $months->toArray(),
        ];
    }

    /**
     * Type du graphique : barres verticales
     */
    protected function getType(): string
    {
        return 'bar';
    }
}
