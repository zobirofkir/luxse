<?php

namespace App\Filament\Resources;

use App\Enums\OrderStatusEnum;
use App\Filament\Resources\OrderResource\Pages;
use App\Filament\Resources\OrderResource\RelationManagers;
use App\Models\Order;
use Filament\Forms;
use Filament\Forms\Components\Select;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class OrderResource extends Resource
{
    protected static ?string $model = Order::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    protected static ?string $navigationLabel = 'Order';
    protected static ?string $pluralModelLabel = 'Order';
    protected static ?string $modelLabel = 'Order';

    protected static ?string $navigationGroup = 'Order';
    protected static ?string $label = 'Order';
    protected static ?string $pluralLabel = 'Order';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Select::make('status')
                    ->label('Statut de la commande')
                    ->options([
                        OrderStatusEnum::EN_ATTENTE->value => 'En attente',
                        OrderStatusEnum::EN_COURS->value => 'En cours de traitement',
                        OrderStatusEnum::EXPÉDIÉ->value => 'Expédié',
                        OrderStatusEnum::LIVRÉ->value => 'Livré',
                        OrderStatusEnum::ANNULÉ->value => 'Annulé',
                    ])
                    ->required()
                    ->native(false),

            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('products.title')
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListOrders::route('/'),
            'edit' => Pages\EditOrder::route('/{record}/edit'),
        ];
    }
}
