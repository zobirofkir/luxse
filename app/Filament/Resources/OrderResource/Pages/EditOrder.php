<?php

namespace App\Filament\Resources\OrderResource\Pages;

use App\Filament\Resources\OrderResource;
use App\Mail\OrderStatusChanged;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;
use Illuminate\Support\Facades\Mail;

class EditOrder extends EditRecord
{
    protected static string $resource = OrderResource::class;
    
    protected $originalStatus;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }

    protected function mutateFormDataBeforeSave(array $data): array
    {
        $this->originalStatus = $this->record->status->value ?? null;
        return $data;
    }

    protected function afterSave(): void
    {
        if ($this->originalStatus && $this->originalStatus !== $this->record->status->value) {
            Mail::to($this->record->user->email)
                ->send(new OrderStatusChanged($this->record, $this->record->status->value));
        }
    }
}
