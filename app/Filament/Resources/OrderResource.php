<?php

namespace App\Filament\Resources;

use App\Enums\OrderStatusEnum;
use App\Filament\Resources\OrderResource\Pages;
use App\Models\Order;
use Filament\Forms;
use Filament\Forms\Components\Select;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class OrderResource extends Resource
{
    protected static ?string $model = Order::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';
    protected static ?string $navigationLabel = 'Orders';
    protected static ?string $pluralModelLabel = 'Orders';
    protected static ?string $modelLabel = 'Order';
    protected static ?string $navigationGroup = 'Orders';
    protected static ?string $label = 'Order';
    protected static ?string $pluralLabel = 'Orders';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Select::make('status')
                    ->label('Order Status')
                    ->options([
                        OrderStatusEnum::EN_ATTENTE->value => 'Pending',
                        OrderStatusEnum::EN_COURS->value => 'Processing',
                        OrderStatusEnum::EXPÉDIÉ->value => 'Shipped',
                        OrderStatusEnum::LIVRÉ->value => 'Delivered',
                        OrderStatusEnum::ANNULÉ->value => 'Cancelled',
                    ])
                    ->required()
                    ->native(false),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('user.name')
                    ->label('Customer')
                    ->sortable()
                    ->searchable(),

                TextColumn::make('user.phone')
                    ->label('Phone Number')
                    ->sortable()
                    ->searchable(),


                TextColumn::make('products.title')
                    ->label('Products')
                    ->formatStateUsing(function ($state, $record) {
                        return $record->products->pluck('title')->implode(', ');
                    })
                    ->wrap()
                    ->limit(50),

                    TextColumn::make('status')
                        ->label('Status')
                        ->badge()
                        ->color(fn ($state): string => match ($state->value) {
                            'en_attente' => 'gray',
                            'en_cours' => 'blue',
                            'expédié' => 'yellow',
                            'livré' => 'green',
                            'annulé' => 'red',
                            default => 'gray',
                        })
                        ->formatStateUsing(fn ($state) => match ($state->value) {
                            'en_attente' => 'Pending',
                            'en_cours' => 'Processing',
                            'expédié' => 'Shipped',
                            'livré' => 'Delivered',
                            'annulé' => 'Cancelled',
                            default => $state->value,
                        }),


            ])
            ->filters([
                // Optional: Add filters here
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
            // No relation managers needed
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
