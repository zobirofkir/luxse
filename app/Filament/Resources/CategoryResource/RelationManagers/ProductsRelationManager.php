<?php

namespace App\Filament\Resources\CategoryResource\RelationManagers;

use Filament\Forms;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class ProductsRelationManager extends RelationManager
{
    protected static string $relationship = 'products';

    public function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('title')
                    ->required()
                    ->maxLength(255),

                Forms\Components\Textarea::make('description')
                    ->rows(3)
                    ->maxLength(65535),

                Forms\Components\TextInput::make('price')
                    ->numeric()
                    ->required()
                    ->prefix('MAD'),

                Forms\Components\TextInput::make('stock')
                    ->numeric()
                    ->default(0),

                Forms\Components\TextInput::make('material')
                    ->maxLength(255),

                TextInput::make("size")
                    ->required()
                    ->maxLength(255)
                    ->placeholder("S, M, L, XL, XXL, XXXL")
                    ->helperText("Separate sizes with a comma (,)"),

                Forms\Components\FileUpload::make('image')
                    ->image()
                    ->multiple()
                    ->directory('products')
                    ->maxSize(2048),

                Forms\Components\Select::make('status')
                    ->options([
                        'active' => 'Active',
                        'inactive' => 'Inactive',
                    ])
                    ->default('active')
                    ->required(),
            ])->columns(1);
    }

    public function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('ProductsRelationManager')
            ->columns([
                Tables\Columns\TextColumn::make('id')->sortable(),

                Tables\Columns\TextColumn::make('name')
                    ->searchable()
                    ->sortable(),

                Tables\Columns\TextColumn::make('slug')
                    ->toggleable(),

                Tables\Columns\TextColumn::make('price')
                    ->money('MAD', true)
                    ->sortable(),

                Tables\Columns\TextColumn::make('stock')
                    ->sortable(),

                Tables\Columns\TextColumn::make('status')
                    ->badge()
                    ->colors([
                        'success' => 'active',
                        'danger' => 'inactive',
                    ])
                    ->sortable(),

                Tables\Columns\ImageColumn::make('image')
                    ->circular()
                    ->size(40),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('status')
                    ->options([
                        'active' => 'Active',
                        'inactive' => 'Inactive',
                    ]),
            ])
            ->filters([
                //
            ])
            ->headerActions([
                Tables\Actions\CreateAction::make(),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }
}
