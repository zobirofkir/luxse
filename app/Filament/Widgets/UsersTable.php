<?php

namespace App\Filament\Widgets;

use App\Models\User;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Widgets\TableWidget as BaseWidget;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Relations\Relation;

class UsersTable extends BaseWidget implements Tables\Contracts\HasTable
{
    use Tables\Concerns\InteractsWithTable;
    
    protected int|string|array $columnSpan = 'full'; 

    protected function getTableQuery(): Builder|Relation|null
    {
        return User::with('profile');
    }

    protected function getTableColumns(): array
    {
        return [
            Tables\Columns\ImageColumn::make('profile.avatar_url')
                ->label('Avatar')
                ->circular()
                ->height(50)
                ->width(50),

            Tables\Columns\TextColumn::make('id')
                ->label('ID')
                ->sortable(),

            Tables\Columns\TextColumn::make('name')
                ->label('Nom')
                ->searchable()
                ->sortable(),

            Tables\Columns\TextColumn::make('email')
                ->label('Email')
                ->searchable()
                ->sortable(),

            Tables\Columns\TextColumn::make('phone')
                ->label('Téléphone')
                ->searchable()
                ->sortable(),

            Tables\Columns\TextColumn::make('created_at')
                ->label('Date d\'inscription')
                ->dateTime('d/m/Y H:i')
                ->sortable(),
        ];
    }
}
